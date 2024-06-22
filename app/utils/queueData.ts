import { listQueue } from "../interfaces/queueType";
import { v4 as uuidV4 } from 'uuid';

export const dataQueue: listQueue[] = [
    {
      id: uuidV4(),
      title: "Projeto de Desenvolvimento Web",
      cards: [
        {
          id: uuidV4(),
          title: "Implementar backend com Node.js",
          description: "Configurar servidor e APIs REST"
        },
        {
          id: uuidV4(),
          title: "Design da interface de usuário",
          description: "Escolher paleta de cores e fontes"
        },
        {
          id: uuidV4(),
          title: "Configuração do banco de dados",
          description: "Escolher e integrar banco de dados"
        },
        {
          id: uuidV4(),
          title: "Testes automatizados",
          description: "Escrever testes para garantir a qualidade"
        },
        {
          id: uuidV4(),
          title: "Deploy da aplicação",
          description: "Hospedar aplicação em servidor web"
        },
        {
          id: uuidV4(),
          title: "Monitoramento de performance",
          description: "Acompanhar métricas de performance da aplicação"
        }
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Estudo para Certificação",
      cards: [
        {
          id: uuidV4(),
          title: "Preparação para exame",
          description: "Rever material de estudo e fazer exercícios"
        },
        {
          id: uuidV4(),
          title: "Simulação de exames",
          description: "Resolver simulados para avaliar conhecimento"
        }
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Melhoria Contínua",
      cards: [
        {
          id: uuidV4(),
          title: "Identificação de oportunidades",
          description: "Analisar processos e identificar melhorias"
        },
        {
          id: uuidV4(),
          title: "Implementação de soluções",
          description: "Aplicar melhorias identificadas nos processos"
        },
        {
          id: uuidV4(),
          title: "Monitoramento de resultados",
          description: "Acompanhar impacto das melhorias implementadas"
        },
        {
          id: uuidV4(),
          title: "Feedback e ajustes",
          description: "Receber feedback e realizar ajustes necessários"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Voluntariado Local",
      cards: [
        {
          id: uuidV4(),
          title: "Seleção de atividades",
          description: "Escolher atividades de voluntariado a participar"
        },
        {
          id: uuidV4(),
          title: "Treinamento inicial",
          description: "Participar de treinamentos obrigatórios"
        },
        {
          id: uuidV4(),
          title: "Execução das atividades",
          description: "Contribuir ativamente nas atividades escolhidas"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Aprendizado de Novo Idioma",
      cards: [
        {
          id: uuidV4(),
          title: "Estudo diário",
          description: "Dedicar pelo menos uma hora por dia ao estudo"
        },
        {
          id: uuidV4(),
          title: "Prática de conversação",
          description: "Participar de grupos de conversação"
        },
        {
          id: uuidV4(),
          title: "Revisão de vocabulário",
          description: "Rever e praticar vocabulário aprendido"
        },
        {
          id: uuidV4(),
          title: "Avaliação de progresso",
          description: "Realizar testes de proficiência regularmente"
        },
        {
          id: uuidV4(),
          title: "Imersão cultural",
          description: "Assistir filmes e séries no idioma estudado"
        }
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Preparação para Concurso Público",
      cards: [
        {
          id: uuidV4(),
          title: "Escolha do concurso",
          description: "Selecionar concurso e verificar edital"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Redesign de Aplicativo Móvel",
      cards: [
        {
          id: uuidV4(),
          title: "Análise de usabilidade",
          description: "Identificar pontos fracos na experiência do usuário"
        },
        {
          id: uuidV4(),
          title: "Prototipagem",
          description: "Criar protótipos para novas funcionalidades"
        },
        {
          id: uuidV4(),
          title: "Desenvolvimento frontend",
          description: "Implementar interfaces com React Native"
        },
        {
          id: uuidV4(),
          title: "Testes de usabilidade",
          description: "Realizar testes com usuários para validar melhorias"
        },
        {
          id: uuidV4(),
          title: "Lançamento e monitoramento",
          description: "Publicar atualizações e acompanhar métricas de uso"
        }
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Preparação para Viagem Internacional",
      cards: [
        {
          id: uuidV4(),
          title: "Planejamento de roteiro",
          description: "Pesquisar destinos e montar roteiro de viagem"
        },
        {
          id: uuidV4(),
          title: "Documentação necessária",
          description: "Verificar passaporte, visto e seguro de viagem"
        },
        {
          id: uuidV4(),
          title: "Reserva de hospedagem e transporte",
          description: "Agendar hospedagem e comprar passagens"
        },
        {
          id: uuidV4(),
          title: "Preparação cultural e linguística",
          description: "Estudar cultura local e frases básicas do idioma"
        },
        {
          id: uuidV4(),
          title: "Checklist de bagagem",
          description: "Preparar mala com itens essenciais para viagem"
        },
        {
          id: uuidV4(),
          title: "Segurança e saúde",
          description: "Verificar vacinas e medidas de segurança no destino"
        },
        {
          id: uuidV4(),
          title: "Aproveitar a viagem!",
          description: "Explorar novos lugares e culturas"
        },
        {
          id: uuidV4(),
          title: "Registro de memórias",
          description: "Registrar momentos especiais da viagem"
        },
        {
          id: uuidV4(),
          title: "Retorno e revisão",
          description: "Rever experiências e planejar próxima viagem"
        },
        {
          id: uuidV4(),
          title: "Compartilhar aprendizados",
          description: "Contar histórias e dicas com amigos e familiares"
        },
        {
          id: uuidV4(),
          title: "Planejamento da próxima viagem",
          description: "Pesquisar e planejar próxima aventura"
        }
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Organização Financeira",
      cards: [
        {
          id: uuidV4(),
          title: "Orçamento mensal",
          description: "Planejar gastos e receitas para o mês"
        },
        {
          id: uuidV4(),
          title: "Economia e investimentos",
          description: "Pesquisar e aplicar em investimentos rentáveis"
        },
        {
          id: uuidV4(),
          title: "Redução de dívidas",
          description: "Elaborar estratégia para quitar dívidas pendentes"
        },
        {
          id: uuidV4(),
          title: "Educação financeira contínua",
          description: "Ler livros e artigos sobre finanças pessoais"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Estilo de Vida Saudável",
      cards: [
        {
          id: uuidV4(),
          title: "Alimentação balanceada",
          description: "Planejar refeições saudáveis e equilibradas"
        },
        {
          id: uuidV4(),
          title: "Atividade física regular",
          description: "Praticar exercícios físicos conforme orientação médica"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Renovação de Interiores",
      cards: [
        {
          id: uuidV4(),
          title: "Pesquisa de tendências",
          description: "Explorar inspirações e tendências de design de interiores"
        },
        {
          id: uuidV4(),
          title: "Planejamento de layout",
          description: "Criar layout funcional e estético para cada ambiente"
        },
        {
          id: uuidV4(),
          title: "Seleção de mobiliário e decoração",
          description: "Escolher móveis e acessórios que complementem o espaço"
        },
        {
          id: uuidV4(),
          title: "Execução e acompanhamento",
          description: "Coordenar obras e garantir a qualidade da execução"
        },
      ]
    },
    {
      id: uuidV4(),
      title: "Projeto de Desenvolvimento de Aplicativo Educacional",
      cards: [
        {
          id: uuidV4(),
          title: "Definição de objetivos educacionais",
          description: "Estabelecer metas e objetivos de aprendizagem"
        },
        {
          id: uuidV4(),
          title: "Design de conteúdo pedagógico",
          description: "Criar materiais educacionais interativos"
        }
      ]
    }
];

export default dataQueue;
