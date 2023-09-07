import { SectionConteiner, Title } from "./Section.styled";

export const Section = ({ title, children}) => {
  return (
    <SectionConteiner>
      <Title>{title}</Title>
      <div>
        <button type="button">good</button>
        <button type="button">netural</button>
        <button type="button">bad</button>
      </div>
      {children}
    </SectionConteiner>
  );
};
