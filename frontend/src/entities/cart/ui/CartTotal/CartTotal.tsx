  import { useProduct } from "../../api/useProduct";

  interface ICartTotalProps {
    quantity: number ;
    id: string | undefined;
  }
    
  export const CartTotalItem = ({ quantity, id }: ICartTotalProps) => {
    const { data } = useProduct(id!);
    const price = data?.price ? +data.price : 0;
    const total = quantity * price;

    return (
      <div>
        <h3>Оплата</h3>
        <p>Total: { total }</p>
        <button type="button">Оплатить</button>
      </div>
    );
  }