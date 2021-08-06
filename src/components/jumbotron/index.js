
import {Inner,Container,Pane,Title,SubTitle,Image, Item} from './styles/jumbotron';

export default function Jumbotron({children, direction ="row", ...restprops}) {
    return (<Item  {...restprops}>
        <Inner direction={direction}>
            {children}
        </Inner>
    </Item>)
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container { ...restProps} >{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
  };
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
  
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
  
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />;
};