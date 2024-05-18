import styles from "./page.module.scss";

const contactFormFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phoneNumber", label: "Phone Number", type: "text", required: true },
  { name: "message", label: "Message", type: "textarea", required: true },
];

const ContactUs: React.FC = () => {
  return (
    <div className={styles.contactUsPage}>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>We&apos;d love to hear from you</h2>
      </div>
      <div className={styles.form}>
        {contactFormFields.map((field) => (
          <div className={styles.formField} key={field.name}>
            {field.type === "textarea" ? (
              <textarea
                className={styles.formInput}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.label}
              />
            ) : (
              <input
                className={styles.formInput}
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.label}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
