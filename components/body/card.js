import React from "react";
import { Select, Input, Space, Slider } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import styles from "../../styles/Custom.module.css";

function CustomCard() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className={styles.topbar}>
        <Select
          defaultValue="Appliances"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Audio",
              label: "Audio",
            },
            {
              value: "Vahicles",
              label: "Vahicles",
            },
            {
              value: "Electronics",
              label: "Electronics",
            },
            {
              value: "Property",
              label: "Property",
            },
          ]}
        />
      </div>
      <div className={styles.componentWappers}>
        <div className={styles.searchBar}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 500,
            }}
          />
          <Slider
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 50]}
            tooltip={{
              open: true,
            }}
            style={{ width: 500 }}
          />
        </div>
      </div>
    </>
  );
}

export default CustomCard;
