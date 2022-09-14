import "./detailblog.scss";
import { Button, Gap } from "../../components";
import { LoginBg } from "../../assets";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-blog-wrapper">
      <Button type="primary" label="Back" onClick={() => navigate("/")} />
      <Gap height={"2em"} />
      <img
        // src="https://source.unsplash.com/600x400/?computer"
        src={LoginBg}
        className="blog-image"
        alt="Thumbnail Post"
      />
      <Gap height={"1em"} />
      <h2>Judul Post</h2>
      <small>Author - Post Date</small>
      <Gap height={"1em"} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic cumque
        consequatur id neque vero aliquam aspernatur sequi dolores asperiores
        nulla tenetur exercitationem adipisci nemo quis quo quod, dicta rerum.
        Placeat et illum, dolorum non dolores, quia est quisquam ab, molestias
        reprehenderit aspernatur? Iste facilis voluptatem, provident perferendis
        quibusdam necessitatibus laudantium vero, quae dolor quasi voluptatum
        est. Repellat voluptatum et incidunt alias, inventore dignissimos ipsam
        placeat assumenda nemo numquam minus non quia reprehenderit illo vitae
        consequuntur ipsa laboriosam cumque explicabo, nihil dolor deserunt.
        Consectetur omnis fuga corporis hic, laboriosam dolor nostrum, quidem
        quo numquam soluta impedit, ratione fugit neque iste eos!
      </p>
    </div>
  );
};

export default DetailBlog;
