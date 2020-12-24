import * as React from "react";
import { render } from "react-dom";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";
import translate, { changeLanguage, messages, int } from "./translate";
import Widget from "./Widget";

import "./styles.css";

function App() {
  const [lang, setLang] = React.useState("en");

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="App">
        <h1>Hello React-Intl with TypeScript</h1>
        <p>Translate: {translate("simple")}</p>
        <p>Single: {translate("greeting", { name: "Воло" })}</p>
        <p>Plural: {translate("plural", { num: 2 })}</p>
        <p>Plural: {translate("plural", { num: 1 })}</p>
        <p>
          <FormattedMessage id="greeting" values={{ name: "Воло" }} />
        </p>
        <p>
          <FormattedMessage id="time" values={{ t: new Date() }} />
        </p>
        <p>
          Format number{" "}
          {int.formatNumber(1000, {
            style: "unit",
            unit: "kilobit",
            unitDisplay: "narrow"
          })}
        </p>
        <p>
          Format number{" "}
          {int.formatNumber(1000, { style: "currency", currency: "RUB" })}
        </p>
        <p>
          Format number{" "}
          {int.formatNumber(1000, { style: "currency", currency: "USD" })}
        </p>
        <br />
        <Widget />
        <br />
        <h2>Change language to: </h2>
        <button
          onClick={() => {
            setLang("ru");
            changeLanguage("ru");
          }}
          disabled={lang === "ru"}
        >
          <span aria-label="ro-flag" role="img">
            ru
          </span>
        </button>
        <button
          onClick={() => {
            setLang("en");
            changeLanguage("en");
          }}
          disabled={lang === "en"}
        >
          <span aria-label="usa-flag" role="img">
            en
          </span>
        </button>
      </div>
    </IntlProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
