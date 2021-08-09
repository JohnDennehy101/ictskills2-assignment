import React from "react";
import CastModal from "../components/castModal";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

const personDetail =  {
    "biography": "Joaquin Rafael Phoenix (born October 28, 1974) is an American actor and producer. He has received numerous awards and nominations, including an Academy Award, a Grammy Award, and two Golden Globe Awards.\n\nAs a child, Phoenix started acting in television with his brother River and sister Summer. His first major film role was in SpaceCamp (1986). During this period, he was credited as Leaf Phoenix, a name he gave himself. He later went back to his original name and received positive reviews for his supporting work in the comedy-drama film To Die For (1995) and the period film Quills (2000). He received wider attention for his portrayal of Commodus in the historical drama film Gladiator (2000), for which he was nominated for the Academy Award for Best Supporting Actor. He subsequently earned Best Actor nominations for portraying musician Johnny Cash in Walk the Line (2005), an alcoholic war veteran in The Master (2012), and the title character in Joker (2019), winning for the latter. His other films include the horror films Signs (2002) and The Village (2004), the historical drama Hotel Rwanda (2004), the romantic drama Her (2013), the crime satire Inherent Vice (2014), and the psychological thriller You Were Never Really Here (2017), winning the Cannes Film Festival Award for Best Actor for the latter.\n\nPhoenix has also ventured into directing music videos, as well as producing films and television shows. For recording the soundtrack to Walk the Line, he won the Grammy Award for Best Compilation Soundtrack for Visual Media. He is a social activist and has lent his support to several charities and humanitarian organizations. He is on the board of directors for The Lunchbox Fund, a non-profit organization which provides daily meals to school students in the South African town of Soweto. He is also known for his animal rights advocacy; he has been a vegan since the age of three and often campaigns with PETA and In Defense of Animals. For his lifelong dedication to animal rights, he was named PETA's Person of the Year in 2019.\n\nDescription above from the Wikipedia article Joaquin Phoenix, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    "dateOfBirth": "1974-10-28",
    "id": 73421,
    "name": "Joaquin Phoenix",
    "from": "San Juan, Puerto Rico",
    "popularity": 6.54,
    "image": "/nXMzvVF6xR3OXOedozfOcoA20xh.jpg"
}

export default {
  title: "Cast Modal",
  component: CastModal,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastModal handleClose={undefined} actorDetail={personDetail} open={true} />
  );
};
Basic.storyName = "Default";
