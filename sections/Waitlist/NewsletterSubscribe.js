import MailchimpSubscribe from "react-mailchimp-subscribe";

import Waitlist from "./waitlist";

const url =
  "https://gmail.us18.list-manage.com/subscribe/post?u=45939022b1e7e6fa9624bac7b&amp;id=46f177a52d&amp;f_id=005d1ce7f0";

// use the render prop and your custom form
const NewsletterSubscribe = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <Waitlist onSubmitted={(formData) => subscribe(formData)} />
        {/* {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>
            Inscription à la liste d&apos;attente réussi
          </div>
        )} */}
      </div>
    )}
  />
);

export default NewsletterSubscribe;
