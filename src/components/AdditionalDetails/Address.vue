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
            <input id="AddressLine1" class="form-control" type="text" name="AddressLine1" value="" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine2">Address Line 2</label>
            <input id="AddressLine2" class="form-control" type="text" name="AddressLine2" value="" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine3">Address Line 3</label>
            <input id="AddressLine3" class="form-control" type="text" name="AddressLine3" value="" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="State">State/County</label>
            <input id="State" class="form-control" type="text" name="State" value="" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label" for="City">City</label>
            <input id="City" class="form-control" type="text" name="City" value="" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="ZipOrPostalCode">ZIP/ Postal Code</label>
            <input id="ZipOrPostalCode" class="form-control" type="text" name="ZipOrPostalCode" value="" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label required" for="Countries">Country</label>
            <select
              id="Countries_SelectedCountryID"
              class="form-select form-control"
              aria-label=""
              data-val="true"
              data-val-required="The SelectedCountryID field is required."
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
            <input id="AddressLine1" class="form-control" type="text" name="AddressLine1" value="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine2">Address Line 2</label>
            <input id="AddressLine2" class="form-control" type="text" name="AddressLine2" value="" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="AddressLine3">Address Line 3</label>
            <input id="AddressLine3" class="form-control" type="text" name="AddressLine3" value="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="State">State/County</label>
            <input id="State" class="form-control" type="text" name="State" value="" />
          </div>
          <div class="col-md-6 mb-3">
            <label class="form-label" for="City">City</label>
            <input id="City" class="form-control" type="text" name="City" value="" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label class="form-label" for="ZipOrPostalCode">ZIP/ Postal Code</label>
            <input id="ZipOrPostalCode" class="form-control" type="text" name="ZipOrPostalCode" value="" />
          </div>

          <div class="col-md-6 mb-3">
            <label class="form-label required" for="Countries">Country</label>
            <select
              id="Countries_SelectedCountryID"
              class="form-select form-control"
              aria-label=""
              data-val="true"
              data-val-required="The SelectedCountryID field is required."
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
  name: 'Address',
  data() {
    return {}
  }
}
</script>
