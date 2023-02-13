import ContentTypes from "./ContentTypes";
import BoxContainer from "./standard-container-lib/BoxContainer";
import styles from './ContainerTypes.module.scss'

const containerTypes: any = {
  boxContainer: BoxContainer,
};

type Props = {
  type: string,
  container: any,
  children?: React.ReactNode
};

const ContainerTypes: React.FC<Props> = (prop) => {
  const Container = containerTypes[prop.type];
  console.log(prop)
  return (
    <Container>
      {
        prop.container.containedArray[0] ? prop.container.containedArray.map((child: any, i: number) => {
          return (
            child.structure == "page" ?
              <h1>{child.slug}</h1>
              : child.structure == "container" ?
                <ContainerTypes type={child.type} container={child} key={i} />
                : child.structure == "content" ?
                  <ContentTypes type={child.type} text={child.text} key={i} />
                  : 'Type not found'
          )
        }) : ''
      }

    </Container>
  )
}

export default ContainerTypes