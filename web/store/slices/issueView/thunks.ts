import { createAppAsyncThunk } from '@/store/createAppAsyncThunk';
import authService from '@/services/auth-services';

export const getUsertAsync = createAppAsyncThunk(
  'auth/fetchGetUser',
  async () => {
    return await authService.getUser();
  }
);
