import { ProjectPanel } from "./ProjectPanel";
import NewYork from "../../../assets/img/NewYork.jpeg";
import { ProjectCard } from "../";

export default {
  title: "molecules/ProjectPanel",
  component: ProjectPanel,
  args: {},
};

export const Default = {
  args: {
    children: (
      <>
        <ProjectCard
          title="New York"
          price="$1,900.00"
          description="great trip with many activities. I love how the trip was organized. I would recommend this trip to everyone."
          reviewCount={101}
          rating={5}
          img_url={NewYork}
        />
        <ProjectCard
          title="New York"
          price="$1,900.00"
          description="great trip with many activities. I love how the trip was organized. I would recommend this trip to everyone."
          reviewCount={101}
          rating={5}
          img_url={NewYork}
        />
        <ProjectCard
          title="New York"
          price="$1,900.00"
          description="great trip with many activities. I love how the trip was organized. I would recommend this trip to everyone."
          reviewCount={101}
          rating={5}
          img_url={NewYork}
        />
      </>
    ),
  },
};
