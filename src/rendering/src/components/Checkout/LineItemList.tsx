import useOcCurrentCart from '../../hooks/useOcCurrentCart';
import LineItemCard from './LineItemCard';
import NoItemsInCartMessage from '../ShopCommon/NoItemsInCartMessage';
import Skeleton from 'react-loading-skeleton';

type LineItemListProps = {
  editable?: boolean;
};

const LineItemList = (props: LineItemListProps): JSX.Element => {
  const { lineItems, initialized } = useOcCurrentCart();
  const skeletonCount = 2;

  const getContent = () => {
    if (!initialized) {
      return (
        // TODO: Refactor to avoid HTML repetition
        <ol className="line-item-list">
          {new Array(skeletonCount).fill('').map((_, index) => {
            return (
              <li key={index}>
                <div className="line-item-card">
                  <Skeleton containerClassName="skeleton-container" height={340} />
                </div>
              </li>
            );
          })}
        </ol>
      );
    } else if (lineItems?.length) {
      return (
        <ol className="line-item-list">
          {lineItems.map((lineItem) => (
            <li key={lineItem.ID}>
              <LineItemCard lineItem={lineItem} editable={props.editable} />
            </li>
          ))}
        </ol>
      );
    } else {
      return <NoItemsInCartMessage />;
    }
  };

  return getContent();
};

export default LineItemList;
