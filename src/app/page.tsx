import { Banner } from "@/components/banner";


const Page = () => {
    return(
        <div className="justify-center items-center">
            <Banner
                titulo='Pôster: Star Wars (1976)'
                texto='
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
                    Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
                    Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
                    Não perca a chance de adicionar essa linda memória ao seu acervo!
                '
                avatar='/images/post1.jpg'
                botao='Comprar Agora'
            />

            <Banner
                titulo='Pôster: Empire sikes Back(1980)'
                texto='
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
                    Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
                    Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
                    Não perca a chance de adicionar essa linda memória ao seu acervo!
                '
                avatar='/images/post2.jpg'
                botao='Comprar Agora'
            />

            <Banner
                titulo='Pôster: Return of the Jedi (1983)'
                texto='
                    Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
                    Uma ótima recordação de um dos mais icônicos filmes de todos os tempos.
                    Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar.
                    Não perca a chance de adicionar essa linda memória ao seu acervo!
                '
                avatar='/images/post3.jpg'
                botao='Comprar Agora'
            />
        </div>
    );
};

export default Page;