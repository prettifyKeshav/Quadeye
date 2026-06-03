import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BankAccountDisclosure = () => {
    return (
        <>
            <section>
                <div className="contact-secD">
                    <div className="container">
                        <div className="heading">
                            <figure>
                                <Image
                                    src="/assets/images/contact/bank.svg"
                                    width={72}
                                    height={72}
                                    alt="ico"
                                />
                            </figure>
                            <h2>Bank Account Disclosure</h2>
                            <p>Investors are requested to note that QE Securities LLP is permitted to receive money from investors through designated bank accounts only named as Up streaming Client Nodal Bank Account (USCNBA). QE Securities LLP is also required to disclose these USCNB accounts to the Stock Exchange. Hence, you are requested to use following USCNB accounts only for the purpose of dealings in your trading account with us. The details of these USCNB accounts are also displayed by NSE on its website under “Know/Locate your Stock Broker”, by BSE on its website under “Member Directory” and by MCX under “Membership | Notice Board | Member & AP Details.</p>
                        </div>

                        <div className="table-wrap">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ACCOUNT NO.</th>
                                        <th>IFSC CODE</th>
                                        <th>BANK NAME AND BRANCH</th>
                                        <th>ACCOUNT TITLE</th>
                                        <th>EXCHANGE/SEGMENT</th>
                                        <th>"VALID UPI ID" REGISTERED WITH SEBI</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>00605034651</td>
                                        <td>ICIC0000006</td>
                                        <td>ICICI Bank Ltd - R N Mukherjee Road, Kolkata</td>
                                        <td>QE Securities LLP-Client Account</td>
                                        <td>NSE-CM/FO/CD</td>
                                        <td>We have a validated UPI ID for payment, please pay us at "qesc.4651.brk@validicici" or <Link href="/"> click here </Link> to scan the QR code </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BankAccountDisclosure