// @ts-ignore
import ClassicFurniture from './../../assets/classic.jpg';
// @ts-ignore
import ModernFurniture from '../../assets/modern.jpg';
//style
import { Wrapper } from './Directory.style';

const Directory: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ClassicFurniture})`,
          }}>
          <a href="/"> Classic Furniture</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ModernFurniture})`,
          }}>
          <a href="/"> Modern Furniture</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Directory;
