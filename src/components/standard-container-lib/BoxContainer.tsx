import './box-container.scss'

type Props = {
  children?: React.ReactNode
};

const BoxContainer: React.FC<Props> = (props) => {
  return (
    <>
      <div className="box-container">
        {props.children}
      </div>
    </>
  );
};

export default BoxContainer;
