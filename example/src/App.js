// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. // SPDX-License-Identifier: MIT-0
import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import Select from "@awsui/components-react/select";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import AppLayout from "@awsui/components-react/app-layout";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  const [selectValue, setSelectValue] = useState();
  return (
    <AppLayout
      content={
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link">Cancel</Button>
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
          header={
            <Header variant="h1" description="Form description">
              Form header
            </Header>
          }
        >
          <Container header={<Header variant="h2">Form container header</Header>}>
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Input field" description="An additional description for this form field.">
                <Input value={inputValue} onChange={(event) => setInputValue(event.detail.value)} />
              </FormField>
              <FormField label="Select field" errorText={!selectValue && "Please select a value"}>
                <Select
                  options={[
                    {
                      label: "Option 1",
                      value: "option-1"
                    },
                    {
                      label: "Option 2",
                      value: "option-3"
                    },
                    {
                      label: "Option 3",
                      value: "option-3"
                    }
                  ]}
                  selectedOption={selectValue}
                  onChange={(event) => setSelectValue(event.detail.selectedOption)}
                  selectedAriaLabel="selected"
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      }
    />
  );
}

export default App;
