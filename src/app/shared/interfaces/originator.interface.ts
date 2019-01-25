export interface Originator {
user: {
  first_name?: string;
  last_name?: string;
  title?: string;
  phone?: string;
  email?: string;
};
company_info: {
  name?: string;
  website?: string;
  description?: string;
  category?: string;
};
loan: {
  name?: string;
  annual_interest?: number;
  term?: number;
  category?: number;
  loan_size?: number;
  min_investment?: number;
};
}
