# OCI Vocabulary Specification

## Draft Vocabulary for US DSCSA ATP Credentialing

This specification describes a Linked Data vocabulary for asserting the digital identity and the ATP status of entities acting as trading partner in the pharmaceutical supply chain. Based on that vocabulary dispensers, wholesalers and manufacturers are able to first acquire an identity credential that is associated to a due diligence of their entity identity and second acquire a ATP credential as verifiable representation of their licenses status. Both credentials are issued by a trusted and accreditated credential issuer. 

## US DSCSA requirements

Under DSCSA regulations, trading partners must fulfill requirements to trace and validate suspicious or returned products along the supply chain. The required data exchange between trading partners occurs on a peer-to-peer basis by using electronic systems. Any trading partner that is interacting in a product verification or tracing operation must be “authorized” as defined under FD&C Act 581(2).

Today, either an entity has an existing relationship of trust with their direct trading partner, or manual steps are implemented to establish trust to indirect trading partners. To manually establish a trusted affiliation with an indirect trading partner, an entity needs to collect records of the trading partner´s business registration, license status, or requires onboarding questionnaires. This manual process can take days, weeks, or in some cases, months. As a result of the existing system, it will be impossible to assure DSCSA compliance when thousands of indirect trading partners are needed to verify products and expect a response within 24h.

By enabling a digital verification in real time, the OCI maintained ATP architecture helps avoiding manual inefficient processes. 

## Related Project: ATP Credentialing Pilot

To create a solution meeting the US DSCSA requirement for authorized trading partners, an industry project was formed in 2020. Together with global pharmaceutical trading partners and service providers an industry wide pilot project developed and tested an ATP architecture. The ATP credentialing pilot was supported by the Healthcare Distribution Alliance (HDA) and managed by the Center for Supply Chain Studies. Within this industry-wide pilot, Verifiable Credential and Decentralized Identifier based ecosystem forming a solution for authorized trading partner authentication in saleable returns product verifications was established. 

## Open Credentialing Initiative (OCI)

The Open Credentialing Initiative (OCI) is built upon open standards to enable the adoption of the interoperable W3C Verifiable Credential standard. All implementations incubated by the OCI need to fulfill the standard requirements in order to ensure interoperability across vendors. Together with early adopters of the ATP architecture, the Open Credentialing Initiative will incubate the piloted ATP architecture to further standardize the implementation for a large-scale adoption. The members are jointly working on technical specifications, integration frameworks and drive standardization requirements across the industry.

## OCI Credential Schemas and Linked Data Vocabulary

Ecosystem adoption will be supported by open semantic standards in form of this linked data vocabulary that is developed and agreed upon by the US pharma supply chain industry. We encourage contributions meeting OCI's inclusive collaboration principles. 

## Identity Credential
A trading partner needs to run through a onboarding process with a trusted identity verification provider - credential issuer. To request the issuance of the Identity Credential, the responsible person performing the onboarding needs to provide main entity data. Additionally the responsible person doing the onboarding must “prove” to the credential issuer that he/she an authorized representative, and that the digital identity of the entity (enterprise) is under control trading partner. The authorized representative performing the onboarding process needs to:

1.	Present identifying information about the company; and
2.	apply a legal signature to attest that the identifying information is true and accurate.

These two steps to identity proofing can be accomplished either digitally or by submitting paper documents.

### Identity verification with DEA Signing Certificate
The digital identity proofing path requires a responsible person in the company to use their digital DEA Signing Certificate in their interaction with the credential issuer.
The digital DEA signing certificate includes both the company’s required identifying information and the signature of the responsible person. This allows the credential issuer to build on a safe and expedited process for issuing the Identity Credential to the trading partner.

Using the DEA Signing Certificate in the context of DSCSA:

The DEA has ruled in the ECom Certificate Policy V4.1 policy that the Controlled Substance Ordering System certificates can be used for purposes other than controlled substance transactions. The policy allows a certificate to be used for any type of transaction which includes risk of fraud (such as an organization trying to present itself as a different organization, which is the problem the Spherity Credentialing Service is solving in the context of DSCSA.) The full document is available for download from the DEA website at http://www.deaecom.gov/ECOM_CP.pdf

### Identity verification with paper documents
If no person in the company has a DEA Signing Certificate, then the identity proofing can take place via the paper documents and “wet” signature path.
For those companies without a DEA Signing Certificate, the credential issuer requests a list of documents that the requestor needs to provide. Documents that provide equivalent identity establishing value will need to be identified. Examples include:
- Articles of Incorporation
- IRS Employer ID Number (EIN) letter
- Regulator Issued License
- DUNS number

Based on the provided documents, the credential issuer performs due diligence to verify the identity and issues an Identity Credential.

In addition, the authorized representative performing the onboarding would provide a copy of a government issued photo ID, and apply his/her signature by pen to a statement attesting that the documents being submitted for the identity proofing are true and accurate.
 
### Identity Credential re-verification and revocation
The credential issuer is obligated to periodically re-verify the identity of the company and maintain an accessible revocation registry where they establish an entry for credentials that fail re-verification.

## ATP Credential
After acquiring the Identity Credential, the trading partner can request at a credential issuer an ATP Credential. Before issuing an ATP Credential, the credential issuer will request a presentation of the Identity Credential. Following this process, the credential issuer ensures that the verified digital identity receives the ATP credential.

In the saleable returns verification process, the ATP Credential travels with the PI Verification message and ensures that the enterprise identity is recognised an authorized trading partner. To acquire an ATP Credential for a enterprise identity, the trading partner needs to provide the following data to the credential issuer:

1.	License number
2.	License State 
3.	Global Location Number - this is optional data

The credential issuer verifies the provided information by comparing the provided data with the information in their database. When the license data entry matches with the public available license data, the credential issuer issues an ATP Credential for the trading partner. For different kinds of trading partners separate ATP Credential types are available:

- DSCSA Wholesaler ATP Credential
- DSCSA Manufacturer ATP Credential
- DSCSA Dispenser ATP Credential

The acquired ATP Credential is stored on the enterprise identity wallet and users can see the credential.

### ATP Credential re-verification and revocation
The issuer of the ATP Credential is obligated to periodically (every 24 hours) re-verifying the ATP status of the trading partner. The credential issuer maintains an accessible revocation registry where they establish an entry for credentials that fail re-verification.
