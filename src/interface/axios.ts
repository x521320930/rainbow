export interface RequestParam {
  (url: string, params: any, ContentType?: string): Promise<{}>;
}
