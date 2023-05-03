import { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function SignUpForm() {
  const [rrnFirst, setRrnFirst] = useState<string>("");
  const [rrnLast, setRrnLast] = useState<string>("");

  const handleFirstChange = (
    value: string
  ) => {
    const regex = /^[0-9\b]{1,6}$/;
    if (value === "" || regex.test(value)) {
      setRrnFirst(value);
    }
  };

  const handleLastChange = (
    value: string
  ) => {
    const regex = /^[0-9\b]{1,7}$/;
    if (value === "" || regex.test(value)) {
      setRrnLast(value);
    }
  };

  return (
    <>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          name="rrnFirst"
          label="주민번호 앞자리"
          id="rrnFirst"
          onChange={(event) => handleFirstChange(event.target.value)}
          value={rrnFirst}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          fullWidth
          name="rrnLast"
          label="주민번호 뒷자리"
          type="password"
          id="rrnLast"
          onChange={(event) => handleLastChange(event.target.value)}
          value={rrnLast}
        />
      </Grid>
    </>
  );
}
