import { apiKey } from "./apis";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  max-height: ${({ $isLoaded }) => ($isLoaded ? "450px" : "0")}; /* Harita yüklenene kadar max-height sıfır */
  opacity: ${({ $isLoaded }) => ($isLoaded ? "1" : "0")};
  background-color: ${({ $isLoaded }) => ($isLoaded ? "transparent" : "#e74c3c")}; /* Harita yüklenene kadar kırmızı */
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  filter: brightness(1) contrast(1); /* Filtreyi sıfırla */
  opacity: ${({ $isLoaded }) => ($isLoaded ? "1" : "0")}; /* Harita yüklenene kadar görünmez */
`;

const Question8Answer = ({ isOpen }) => {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && isLoaded) {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isOpen, isLoaded]);

  return (
    <MapContainer ref={mapRef} $isLoaded={isLoaded}>
      <StyledIframe
        title="Getir Ofisleri"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Getir+Office`}
        onLoad={() => setIsLoaded(true)} /* Harita yüklendiğinde isLoaded true olur */
        $isLoaded={isLoaded}
      />
    </MapContainer>
  );
};

const question8 = {
  question:
    "Getir'in İstanbul, Ankara ve İzmir’de ofisleri bulunuyor. Daha önce ofislerin konumlarına baktın mı? On-site (ofiste) çalışma konusunda düşüncelerin neler?",
  answer: (props) => <Question8Answer {...props} />,
};

export default question8;
