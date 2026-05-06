import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = function () {
  return (
    <section className="d-flex flex-column w-50 gap-3 mb-3">
      <div className="d-flex justify-content-start align-items-center gap-4">
        <Facebook className="text-light fs-2"></Facebook>
        <Instagram className="text-light fs-2"></Instagram>
        <Twitter className="text-light fs-2"></Twitter>
        <Youtube className="text-light fs-2"></Youtube>
      </div>
      <div className="container-fluid px-0">
        <div className="row gy-4">
          <div className="col-6 col-md-3">
            <h5 className="text-secondary fs-6">Audio and Subtitles</h5>
            <h5 className="text-secondary fs-6">Media Center</h5>
            <h5 className="text-secondary fs-6">Privacy</h5>
            <h5 className="text-secondary fs-6">Contact Us</h5>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="text-secondary fs-6">Audio and Description</h5>
            <h5 className="text-secondary fs-6">Investor Relations</h5>
            <h5 className="text-secondary fs-6">Legal Notices</h5>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="text-secondary fs-6">Help Center</h5>
            <h5 className="text-secondary fs-6">Jobs</h5>
            <h5 className="text-secondary fs-6">Cookie Preferences</h5>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="text-secondary fs-6">Gift Cards</h5>
            <h5 className="text-secondary fs-6">Term of Use</h5>
            <h5 className="text-secondary fs-6">Corporate Information</h5>
          </div>
          <div>
            <span className="border p-2 text-secondary fs-6">Service Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFooter;
