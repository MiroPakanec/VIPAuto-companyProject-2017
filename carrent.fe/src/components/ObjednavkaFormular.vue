<template>
  <v-form v-model="valid"
          ref="form"
          lazy-validation>
    <v-text-field label="Meno"
                  v-model="name"
                  :rules="nameRules"
                  :counter="15"
                  required></v-text-field>
    <v-text-field label="Priezvisko"
                  v-model="name"
                  :rules="nameRules"
                  :counter="15"
                  required></v-text-field>
    <v-text-field label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required></v-text-field>
    <v-layout row>
      <v-flex xs3>
        <v-select label=""
                  v-model="selectPhoneCountryCode"
                  :items="countryCodes"
                  combobox></v-select>
      </v-flex>
      <v-flex xs8
              offset-xs1>
        <v-text-field label="Telefónne číslo (odporúčané)"
                      v-model="phone"
                      :rules="phoneRules"
                      :counter="15"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row
              wrap>
      <v-flex xs12>
        <v-menu lazy
                :close-on-content-click="false"
                transition="fade-transition"
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px">
          <v-text-field slot="activator"
                        label="Objednávka od..."
                        v-model="from"
                        prepend-icon="event"
                        readonly></v-text-field>
          <v-date-picker v-model="from"
                         no-title
                         scrollable
                         :allowed-dates="allowedFromDates"
                         actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat
                       color="primary"
                       @click="cancel">Zrušiť</v-btn>
                <v-btn flat
                       color="primary"
                       @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout row
              wrap
              v-if="from != ''">
      <v-flex xs12>
        <v-menu lazy
                :close-on-content-click="false"
                transition="fade-transition"
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px">
          <v-text-field slot="activator"
                        label="Objednávka do..."
                        v-model="to"
                        prepend-icon="event"
                        readonly></v-text-field>
          <v-date-picker v-model="to"
                         :allowed-dates="allowedToDates"
                         no-title
                         scrollable
                         actions>
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat
                       color="primary"
                       @click="cancel">Zrušiť</v-btn>
                <v-btn flat
                       color="primary"
                       @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout row
              wrap
              mt-4
              mb-2>
      <v-flex xs12
              text-xs-left>
        <p class="standard-text no-margin">21 EUR /deň x {{noDays}} dní</p>
        <p class="header-text header-text-small">Celková cena: 210 EUR</p>
      </v-flex>
    </v-layout>
    <v-btn flat
           class="standard-background standard-text-white"
           @click="submit"
           :disabled="!valid">
      submit
    </v-btn>
    <v-btn class="standard-border standard-color"
           @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    from: new Date().toString(),
    to: new Date().addDays(1).toString(),

    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 15) || "Name must be less than 15 characters"
    ],
    surname: "",
    surnameRules: [
      v => !!v || "Surname is required",
      v => (v && v.length <= 15) || "Surname must be less than 15 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    phone: "",
    phoneRules: [
      v => (v && v.length <= 20) || "Phone must be less than 20 characters",
      v =>
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v) ||
        "Phone must be valid"
    ],
    selectPhoneCountryCode: "+421",
    countryCodes: ["+421", "+45"],
    noDays: null,
    checkbox: false
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  computed: {
    allowedFromDates() {
      var allowedDates = [];
      var notice = 30;

      while (notice >= 0) {
        var dat = new Date();
        var current = dat.addDays(notice).toString();
        allowedDates.push(current);
        notice--;
      }

      return allowedDates;
    },
    allowedToDates() {
      var allowedDates = [];
      var notice = 30;

      while (notice > 0) {
        var current = new Date(this.from).addDays(notice).toString();
        allowedDates.push(current);
        notice--;
      }

      return allowedDates;
    }
  },
  watch: {
    from: function() {
      this.to = new Date(this.from).addDays(1).toString();
    },
    to: function() {
      var d1 = new Date(this.from);
      var d2 = new Date(this.to);

      var timeDiff = Math.abs(d2.getTime() - d1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      this.noDays = diffDays;
    }
  }
};

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

Date.prototype.addMonths = function(months) {
  var dat = new Date(this.valueOf());
  dat.setMonth(dat.getMonth() + months);
  return dat;
};

Date.prototype.toString = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [
    this.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd
  ].join("-");
};
</script>

<style scoped>
button:disabled {
  background-color: rgb(200, 200, 200) !important;
}
</style>
