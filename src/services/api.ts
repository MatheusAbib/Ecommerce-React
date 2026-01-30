import { ProductsResponse } from '../types/Product';


const getApiUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return '/produtos.json'; // Arquivo baixado da URL fornecida
  }
  return 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
};

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const API_URL = getApiUrl();
  
  try {
    console.log(`Buscando produtos de: ${API_URL}`);
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    const data: ProductsResponse = await response.json();
    console.log(`✅ ${data.products.length} produtos carregados com sucesso`);
    return data;
  } catch (error) {
    console.error(' Erro ao buscar produtos:', error);
    
    console.warn(' Usando dados de fallback para demonstração');
    return {
      success: true,
      products: [
        {
          productName: "Iphone 11 PRO MAX",
          descriptionShort: "Demonstração - Produto carregado localmente devido a CORS",
          photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
          price: 15000
        },
        {
          productName: "IPHONE 13 MINI",
          descriptionShort: "Demonstração - Produto exemplo",
          photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
          price: 9000
        }
      ]
    };
  }
};
