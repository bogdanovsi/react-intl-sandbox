import * as React from "react";
import { useIntl, FormattedDate, FormattedMessage } from "react-intl";

export default function Widget() {
  const intl = useIntl();
  const date = new Date();
  return (
    <div>
      <h3>
        Hey, I am a widget that used both translate function and other
        react-intl components
      </h3>
      <p>
        <span title={intl.formatDate(date)}>
          <FormattedDate value={date} />
        </span>
      </p>
      <p>
        <FormattedMessage
          id="greeting"
          description="Greeting to welcome the user to the app"
          defaultMessage="Hello, {name}!"
          values={{
            name: "Eric"
          }}
        />
      </p>
      <p>{intl.formatMessage({ id: "greeting" }, { name: " Adrian" })}</p>
    </div>
  );
}
