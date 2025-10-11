-- Create comments table for Q&A sections
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_url TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  comment TEXT NOT NULL,
  reply TEXT,
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  replied_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert comments
CREATE POLICY "Anyone can insert comments"
ON public.comments
FOR INSERT
WITH CHECK (true);

-- Allow anyone to read approved comments
CREATE POLICY "Anyone can read approved comments"
ON public.comments
FOR SELECT
USING (is_approved = true);

-- Create index for better performance
CREATE INDEX idx_comments_page_url ON public.comments(page_url);
CREATE INDEX idx_comments_approved ON public.comments(is_approved);