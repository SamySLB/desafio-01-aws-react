import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ImageData {
  url: string;
  text?: string;
}

const imageDatabase: { [key: string]: ImageData } = {
  content1: {
    url: "/assets/imagem-content1.png",
    text: "Easy task & work management with pomo",
  },
  content2: {
    url: "/assets/imagem-content2.png",
    text: "Track your productivity & gain insights",
  },
  content3: {
    url: "/assets/imagem-content3.png",
    text: "Boost your productivity now & be successful",
  }
};


interface ContentPageProps {
  contentKey: string;
}

const SearchUrlImage: React.FC<ContentPageProps> = ({ contentKey }) => {
  const navigate = useNavigate();
  const { url, text } = imageDatabase[contentKey];

  const nextPage = {
    content1: "/content2",
    content2: "/content3",
    content3: "/", 
  };

  const AfterPage = {
    content1: "/",
    content2: "/content3",
    content3:  "/content2", 
  };

  return (
   <>
          <button onClick={() => navigate(AfterPage[contentKey])}>After</button>
            <div className="content-page">
            
                <img src={url} alt={text} className="image" />
                 <p>{text}</p>
                       <div>
                    <button></button>
                    <button></button>
                    <button></button>
                        </div>
                <button onClick={() => navigate(nextPage[contentKey])}>Next</button>
            </div>
    </>
  );
};


export default SearchUrlImage;
