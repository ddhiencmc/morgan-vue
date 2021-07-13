<template>
  <div>
    <!--  Country of residence address -->
    <div>
      <h2>Country of residence address</h2>
      <br />
      <p>If you have an address in this Country, please add it here:</p>
      <div class="form-group mt-4">
        <div class="row">
          <div class="col mb-3">
            <label class="form-label" for="AddressLine1">Address Line 1</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine1"
              name="AddressLine1"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine2">Address Line 2</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine2"
              name="AddressLine2"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine3">Address Line 3</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine3"
              name="AddressLine3"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="State">State/County</label>
            <input
              class="form-control"
              type="text"
              id="State"
              name="State"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label" for="City">City</label>
            <input
              class="form-control"
              type="text"
              id="City"
              name="City"
              value=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="ZipOrPostalCode"
              >ZIP/ Postal Code</label
            >
            <input
              class="form-control"
              type="text"
              id="ZipOrPostalCode"
              name="ZipOrPostalCode"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label" for="Countries">Country</label>
            <select
              class="form-select form-control"
              aria-label=""
              data-val="true"
              data-val-required="The SelectedCountryID field is required."
              id="Countries_SelectedCountryID"
              name="Countries.SelectedCountryID"
            >
              <option selected="">Please select</option>
              <option value="1">Afghanistan</option>
              <option value="2">Việt Nam</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!--  Home Country Address -->
    <div>
      <h2>Home Country Address (Country Of Your Primary Passport)</h2>
      <br />
      <p>If you have an address in this Country, please add it here:</p>
      <div class="form-group mt-4">
        <div class="row">
          <div class="col mb-3">
            <label class="form-label" for="AddressLine1">Address Line 1</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine1"
              name="AddressLine1"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine2">Address Line 2</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine2"
              name="AddressLine2"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine3">Address Line 3</label>
            <input
              class="form-control"
              type="text"
              id="AddressLine3"
              name="AddressLine3"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="State">State/County</label>
            <input
              class="form-control"
              type="text"
              id="State"
              name="State"
              value=""
            />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="City">City</label>
            <input
              class="form-control"
              type="text"
              id="City"
              name="City"
              value=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="ZipOrPostalCode"
              >ZIP/ Postal Code</label
            >
            <input
              class="form-control"
              type="text"
              id="ZipOrPostalCode"
              name="ZipOrPostalCode"
              value=""
            />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label" for="Countries">Country</label>
            <select
              class="form-select form-control"
              aria-label=""
              data-val="true"
              data-val-required="The SelectedCountryID field is required."
              id="Countries_SelectedCountryID"
              name="Countries.SelectedCountryID"
            >
              <option selected="">Please select</option>
              <option value="1">Afghanistan</option>
              <option value="2">Việt Nam</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Address",
  data() {
    return {};
  },
};
</script>
