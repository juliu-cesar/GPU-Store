import HeaderProductPage from "../HeaderProductPage";
import ProductInfoLayout from "../ProductInfoLayout";
import { StyledProductTable } from "./components/StyledProductTable";

interface Props {
  infoTable:
    | {
        th: string[];
        td: string[];
      }[]
    | undefined;
  packageContent: string[] | undefined;
}
export default function ProductTable({ infoTable, packageContent }: Props) {
  return (
    <StyledProductTable>
      <ProductInfoLayout>
        <HeaderProductPage>
          <h1>Informações técnicas</h1>
        </HeaderProductPage>
        <div className="frame_table">
          <table>
            {infoTable &&
              infoTable.map((el, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      {el.th.map((e, i) => {
                        return <th key={i}>{e}</th>;
                      })}
                      {el.td.map((e, i) => {
                        let stringI: any = [e];
                        if (e.includes("<br>")) {
                          stringI = e.split(" ").map((e) => {
                            return e == "<br>" ? <br /> : e;
                          });
                        }
                        return <td key={i}>{stringI}</td>;
                      })}
                    </tr>
                  </tbody>
                );
              })}
          </table>
          <div className="package_content">
            <h4>Conteúdo da Embalagem</h4>
            <ul>
              {packageContent &&
                packageContent.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
            </ul>
          </div>
        </div>
      </ProductInfoLayout>
    </StyledProductTable>
  );
}
