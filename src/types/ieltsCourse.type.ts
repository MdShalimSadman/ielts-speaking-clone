export interface Response<T> {
  data: {
    code: number;
    data: T;
  };
}

export interface IIeltsResponse {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface ISectionValue {
    background_color: string;
    image: string;
    checklist_text_color: string;
    end_at: string;  
    id: string;
    start_at: string; 
    template: string;
    text: string;
    name:string;
    description:string;
  }
  
  export interface Section {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: ISectionValue[];
  }
  
  export interface DefaultMeta {
    content: string;
    type: string;
    value: string;
  }
  
  export interface Schema {
    meta_name: string;
    meta_value: string;
    type: string;
  }
  
  export interface Seo {
    defaultMeta: DefaultMeta[];
    description: string;
    keywords: string[];
    schema: Schema[];
    title: string;
  }
  