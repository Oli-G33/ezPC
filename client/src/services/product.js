import api from './base';

export const loadProducts = () =>
  api.get('/products').then(response => response.data);
