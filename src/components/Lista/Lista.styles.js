import styled from "styled-components";

export const Recuadro = styled.div`
  color: #000000;
  background: #fdfefe;
  border-bottom: #ccd1d1 2px solid;
  width: 100%;
  height: 260px;
  text-align: left;
  display: flex;
  box-shadow: 0px 2px 5px -6px rgb(95, 95, 95);
  margin-left: 15px;
  margin-bottom: 1rem;
  margin-top: 2.5rem;
  font-size: var(--letraEstandar);
`;

export const Texto = styled.div`
  height: 260px;
  text-decoration: none;
  margin: 0 0 0 2rem;
`;

export const ImagenL = styled.img`
  width: 300px;
  height: 260px;
  display: block;
  padding: 0px 0px 0px 0px;
  float: left;
`;

export const NombreIL = styled.div`
  text-align: left;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
`;
export const AutorL = styled.p`
  text-align: left;
  color: var(--plomoAgua);
`;
export const CantInsL = styled.div`
  text-align: left;
  font-weight: bold;
`;
