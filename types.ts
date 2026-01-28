
export interface Product {
  id: string;
  name: string;
  category: 'Phone' | 'Accessory' | 'Plan';
  price: number;
  description: string;
  image: string;
  rating: number;
}

export interface MobilePlan {
  id: string;
  name: string;
  data: string;
  talktime: string;
  validity: string;
  price: number;
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NetworkStat {
  time: string;
  latency: number;
  download: number;
  upload: number;
}
