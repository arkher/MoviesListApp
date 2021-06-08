export const methods = {
  get: 'get',
  post: 'post',
  update: 'put',
  delete: 'delete',
  patch: 'patch',
};

export const httpStatusResponse = {
  200: {
    message: 'Sucesso',
    code: 'SUCCESS',
  },
  400: {
    message: 'Requisição inválida.',
    code: 'BAD_REQUEST',
  },
  401: {
    message: 'Você não tem permissão para acessar o conteúdo.',
    code: 'UNAUTHORIZED',
  },
  404: {
    message: 'Recurso não encontrado',
    code: 'NOT_FOUND',
  },
  500: {
    message: 'Houve um erro interno.',
    code: 'INTERNAL_SERVER_ERROR',
  },
};

export const defaultHttpStatusResponse = {
  message: 'Erro desconhecido',
  code: '',
};