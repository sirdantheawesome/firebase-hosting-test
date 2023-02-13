
import { Heading1Content, Heading2Content, Heading3Content, Heading4Content, Heading5Content, Heading6Content, ParagraphContent } from "./standard-content-lib/TextContents"

const contentTypes: any = {
  pContent: ParagraphContent,
  h1Content: Heading1Content,
  h2Content: Heading2Content,
  h3Content: Heading3Content,
  h4Content: Heading4Content,
  h5Content: Heading5Content,
  h6Content: Heading6Content,
};



const ContentTypes = (prop: { type: string, text: any }) => {
  const Content = contentTypes[prop.type];
  return <Content text={prop.text} />;
}

export default ContentTypes