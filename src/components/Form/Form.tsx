import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import css from "./Form.module.css";

export default function Form(): ReactElement {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emails, setEmails] = useState<string[]>(["", ""]);

    const formValue = () => {
        return { username, password, emails };
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form value", formValue());
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        setEmails((currentEmails) => {
            const copyEmails = [...currentEmails];
            copyEmails[index] = e.target.value;
            return copyEmails;
        });
    };

    const onAddEmail = () => {
        setEmails((currentEmails) => [...currentEmails, ""]);
    };

    const onRemoveEmail = () => {
        setEmails((currentEmails) => {
            const copyEmails = [...currentEmails];
            copyEmails.pop();
            return copyEmails;
        });
    };

    return (
        <form className={`ui form ${css.form}`} onSubmit={onSubmit}>
            <label>Username</label>
            <input placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input
                placeholder="Password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <label>Email&apos;s</label>
            <button onClick={onAddEmail} type="button" className="ui button tiny">
                +
            </button>
            <button onClick={onRemoveEmail} type="button" className="ui button tiny">
                -
            </button>
            {emails.map((email, index) => (
                <input
                    key={index}
                    placeholder="e-mail"
                    type="email"
                    value={email}
                    onChange={(e) => onChangeEmail(e, index)}
                />
            ))}

            <button className="ui button" type="submit">
                Submit
            </button>
        </form>
    );
}
