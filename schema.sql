-- Email sequences for lifecycle emails (welcome, drip, re-engagement)
-- Used for structured email marketing campaigns

CREATE TABLE IF NOT EXISTS email_sequences (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  trigger_event TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  delay_hours INTEGER DEFAULT 0,
  sequence_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  variant TEXT DEFAULT 'A',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Email delivery tracking and analytics
CREATE TABLE IF NOT EXISTS email_log (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  sequence_id TEXT REFERENCES email_sequences(id),
  recipient TEXT NOT NULL,
  status TEXT DEFAULT 'sent',
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_email_sequences_trigger_event ON email_sequences(trigger_event);
CREATE INDEX IF NOT EXISTS idx_email_sequences_active ON email_sequences(active);
CREATE INDEX IF NOT EXISTS idx_email_log_sequence_id ON email_log(sequence_id);
CREATE INDEX IF NOT EXISTS idx_email_log_recipient ON email_log(recipient);
CREATE INDEX IF NOT EXISTS idx_email_log_status ON email_log(status);