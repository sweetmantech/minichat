import { ArtifactKind } from '@/components/artifact';

export interface SaveDocumentProps {
  id: string;
  title: string;
  kind: ArtifactKind;
  content: string;
  userId: string;
}

export const artifactKinds = ['text', 'code', 'image', 'sheet'] as const;
