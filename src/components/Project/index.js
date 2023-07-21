import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./index.css";

export default function ActionAreaCard(props) {
  const { title, description, imageUrl, altText, repoUrl, deployUrl } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={altText}
        sx={{
          objectFit: "cover",
          objectPosition: "center",
          backgroundColor: "#293145",
        }}
      />
      <CardContent sx={{ backgroundColor: "#293145" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "#a3acb2", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: "#a3acb2" }}>
          {description}
        </Typography>
        <div className="gitLink">
          <a href={repoUrl}>GitHub Repo</a>
        </div>
        <div className="gitLink">
          <a href={deployUrl}>Deployed Application</a>
        </div>
      </CardContent>
    </Card>
  );
}
