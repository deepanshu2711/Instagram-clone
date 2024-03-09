import Image from "next/image";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Button variant="contained" color="success">
        ClickMe
      </Button>
      <p className="text-3xl text-green-500 font-bold">
        this is using tailwind
      </p>
    </div>
  );
}
