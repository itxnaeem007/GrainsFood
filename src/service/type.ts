import { FAQS_POS } from "@/config";

export type IResponseAPI = {
  message: string;
  data: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  meta?: { pagination: IPagination };
};
export interface IPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface IBlockchain {
  blockConfirmation?: number;
  chainId?: number;
  createdAt?: string;
  id?: number;
  name?: string;
  rpcUrl?: string;
  updatedAt?: string;
  imageUrl?: string;
}
export interface ITokenList {
  blockchains?: IBlockchain[];
  blockchainId: number;
  coingeckoId: string;
  color: string;
  contractAddress: string;
  createdAt: string;
  decimals: number;
  id: number;
  imageUrl: string;
  isActive: boolean;
  isNative: boolean;
  name: string;
  symbol: string;
  image?: string;
  label: string;
  updatedAt: string;
  balance: number;
}

export interface IBalanceResponse {
  data: {
    balance: ITokenList[];
  };
  message: string;
  status: number;
}

export interface ITokenBalance {
  data: ITokenList;
  message: string;
  status: number;
}

export interface ITokenResponse {
  data: ITokenList[];
  message: string;
  status: number;
}

export interface IFaqsAttributes {
  question: string;
  answer: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  FAQS_POS: FAQS_POS;
}
export interface IFAQsResponse {
  id: number;
  attributes: IFaqsAttributes;
}

export interface IBlogAttributes {
  category: string;
  createdAt: string;
  description: string;
  heading: string;
  publishedAt: string;
  readTime: string;
  shorterDescription: string;
  updatedAt: string;
  poster: any;
  tags: {
    data: ITagsResponse[];
  };
}
export interface IBlogsResponse {
  id: number;
  attributes: IBlogAttributes;
}

export interface ITagsAttributes {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  isShow: boolean;
  tag: string;
  blog: {
    data: IBlogsResponse[];
  };
}
export interface ITagsResponse {
  id: number;
  attributes: ITagsAttributes;
}
