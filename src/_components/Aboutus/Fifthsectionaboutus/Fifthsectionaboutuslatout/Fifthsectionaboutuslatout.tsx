import { getData } from "@/utilities/fetchApi";
import Fifthsectionaboutuscontant from "../Fifthsectionaboutuscontant/Fifthsectionaboutuscontant";

export default async function Fifthsectionaboutuslatout() {
  const { rows: reviewRows } = await getData(
    `reviews?tenant_id=58&language_id=51&paginate=7&status=active`
  );

  return <Fifthsectionaboutuscontant reviewRows={reviewRows} />;
}
