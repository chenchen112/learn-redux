import { User } from '../types/user';
import { Product } from '../types/cart';

export const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `用户${i + 1}`,
  email: `user${i + 1}@example.com`,
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 1}`,
  role: (['admin', 'user', 'guest'] as const)[i % 3],
  status: i % 2 === 0 ? 'active' : 'inactive',
}));

export const mockProducts: Product[] = [
  {
    id: 'product-1',
    name: 'React 实战教程',
    price: 99,
    image: 'https://via.placeholder.com/150',
    stock: 100,
  },
  {
    id: 'product-2',
    name: 'TypeScript 进阶指南',
    price: 79,
    image: 'https://via.placeholder.com/150',
    stock: 50,
  },
  {
    id: 'product-3',
    name: 'Node.js 开发手册',
    price: 89,
    image: 'https://via.placeholder.com/150',
    stock: 30,
  },
  {
    id: 'product-4',
    name: 'Vue.js 项目实战',
    price: 69,
    image: 'https://via.placeholder.com/150',
    stock: 80,
  },
  {
    id: 'product-5',
    name: '前端性能优化',
    price: 59,
    image: 'https://via.placeholder.com/150',
    stock: 60,
  },
];

export const fetchUsersApi = async (
  page: number,
  pageSize: number,
  searchQuery: string
): Promise<{ users: User[]; total: number }> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filtered = mockUsers;
  if (searchQuery) {
    filtered = mockUsers.filter(
      u => u.name.includes(searchQuery) || u.email.includes(searchQuery)
    );
  }
  
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  
  return {
    users: filtered.slice(start, end),
    total: filtered.length,
  };
};
