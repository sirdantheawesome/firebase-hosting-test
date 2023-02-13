import styles from './text-content.module.scss'

const ParagraphContent = (prop: { text: string }) => {
  return (
    <p>{prop.text}</p>
  );
};

const Heading1Content = (prop: { text: string }) => {
  return (
    <h1>{prop.text}</h1>
  );
};

const Heading2Content = (prop: { text: string }) => {
  return (
    <h2>{prop.text}</h2>
  );
};

const Heading3Content = (prop: { text: string }) => {
  return (
    <h3>{prop.text}</h3>
  );
};

const Heading4Content = (prop: { text: string }) => {
  return (
    <h4>{prop.text}</h4>
  );
};

const Heading5Content = (prop: { text: string }) => {
  return (
    <h5>{prop.text}</h5>
  );
};

const Heading6Content = (prop: { text: string }) => {
  return (
    <h6>{prop.text}</h6>
  );
};

export {
  ParagraphContent,
  Heading1Content,
  Heading2Content,
  Heading3Content,
  Heading4Content,
  Heading5Content,
  Heading6Content
};
