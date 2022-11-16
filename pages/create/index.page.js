import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Select from "../../components/select/select";

const Create = () => {
  return (
    <div>
      <h1>Create New Project</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Project Name
          <Input type="text" name="project-name" onChange={() => {}} />
        </label>
        <label>
          Subtitle
          <Input type="text" name="subtitle" onChange={() => {}} />
        </label>
        <label>
          Category
          <Select
            type="text"
            name="category"
            id="1"
            options={[
              { value: "technology", name: "Technology" },
              { value: "nfts", name: "NFTs" },
              { value: "games", name: "Games" },
              { value: "education", name: "Education" },
              { value: "music", name: "Music" },
              { value: "community", name: "Community" },
              { value: "non-profit", name: "Non profit" },
              { value: "other", name: "Other" },
            ]}
            onChange={() => {}}
          />
        </label>
        <label>
          Description
          <Input type="text-area" name="description" onChange={() => {}} />
        </label>
        <label>
          Currency
          <Select
            type="text"
            name="currency"
            id="1"
            options={[
              { value: "USD", name: "USD" },
              { value: "BTC", name: "BTC" },
              { value: "ETH", name: "ETH" },
              { value: "NGN", name: "NGN" },
              { value: "EUR", name: "EUR" },
            ]}
            onChange={() => {}}
          />
        </label>
        <label>
          Fund Goal
          <Input type="number" name="fund-goal" onChange={() => {}} />
        </label>
        <p>Dates</p>
        <label>
          Start Date
          <Input type="date" name="start-date" onChange={() => {}} />
        </label>
        <label>
          End Date
          <Input type="date" name="end-date" onChange={() => {}} />
        </label>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default Create;
