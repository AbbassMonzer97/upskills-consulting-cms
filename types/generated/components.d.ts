import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterForm extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_forms';
  info: {
    description: '';
    displayName: 'FooterForm';
  };
  attributes: {
    enComment: Schema.Attribute.String;
    enEmail: Schema.Attribute.String;
    enName: Schema.Attribute.String;
    enPhone: Schema.Attribute.String;
    enSubmit: Schema.Attribute.String;
    enTitle: Schema.Attribute.String;
    frComment: Schema.Attribute.String;
    frEmail: Schema.Attribute.String;
    frName: Schema.Attribute.String;
    frPhone: Schema.Attribute.String;
    frSubmit: Schema.Attribute.String;
    frTitle: Schema.Attribute.String;
  };
}

export interface FooterSocial extends Struct.ComponentSchema {
  collectionName: 'components_footer_socials';
  info: {
    description: '';
    displayName: 'social';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    description: '';
    displayName: 'SocialMedia';
  };
  attributes: {
    enTitle: Schema.Attribute.String;
    frTitle: Schema.Attribute.String;
    SocialMedia: Schema.Attribute.Component<'footer.social', true>;
  };
}

export interface HeaderHeaderTitles extends Struct.ComponentSchema {
  collectionName: 'components_header_header_titles';
  info: {
    description: '';
    displayName: 'HeaderTitles';
  };
  attributes: {
    enTitle: Schema.Attribute.String;
    frTitle: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface HomeAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_home_aboutuses';
  info: {
    description: '';
    displayName: 'AboutUs';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'home.about-us-cards', true>;
    enText: Schema.Attribute.RichText;
    enTitle: Schema.Attribute.RichText;
    frText: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
  };
}

export interface HomeAboutUsCards extends Struct.ComponentSchema {
  collectionName: 'components_home_about_us_cards';
  info: {
    displayName: 'AboutUsCards';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enDescription: Schema.Attribute.RichText;
    enRole: Schema.Attribute.String;
    frDescription: Schema.Attribute.RichText;
    frRole: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.RichText;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'header.header-titles', true>;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enTitle: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeHomePrograms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_programs';
  info: {
    displayName: 'HomePrograms';
  };
  attributes: {
    enTitle: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
    programs: Schema.Attribute.Component<'home.programs', true>;
  };
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'HomeServices';
  };
  attributes: {
    enTitle: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
    servicesOverview: Schema.Attribute.Component<'home.services', true>;
  };
}

export interface HomeHomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_home_testimonials';
  info: {
    displayName: 'HomeTestimonials';
  };
  attributes: {
    clientTestimonials: Schema.Attribute.Component<'home.testimonials', true>;
    enTitle: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
  };
}

export interface HomeIntro extends Struct.ComponentSchema {
  collectionName: 'components_home_intros';
  info: {
    description: '';
    displayName: 'Intro';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    enConfirmationPopup: Schema.Attribute.RichText;
    enEmail: Schema.Attribute.String;
    enSubTitle: Schema.Attribute.String;
    enText: Schema.Attribute.RichText;
    enTitle: Schema.Attribute.RichText;
    frConfirmationPopup: Schema.Attribute.RichText;
    frEmail: Schema.Attribute.String;
    frSubTitle: Schema.Attribute.String;
    frText: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomePrograms extends Struct.ComponentSchema {
  collectionName: 'components_home_programs';
  info: {
    displayName: 'Programs';
  };
  attributes: {
    enSummary: Schema.Attribute.String;
    enText: Schema.Attribute.RichText;
    enTitle: Schema.Attribute.String;
    frSummary: Schema.Attribute.String;
    frText: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    enText: Schema.Attribute.RichText;
    enTitle: Schema.Attribute.RichText;
    frText: Schema.Attribute.RichText;
    frTitle: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    enText: Schema.Attribute.String;
    enTitle: Schema.Attribute.RichText;
    frText: Schema.Attribute.String;
    frTitle: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-form': FooterFooterForm;
      'footer.social': FooterSocial;
      'footer.social-media': FooterSocialMedia;
      'header.header-titles': HeaderHeaderTitles;
      'home.about-us': HomeAboutUs;
      'home.about-us-cards': HomeAboutUsCards;
      'home.banner': HomeBanner;
      'home.home-programs': HomeHomePrograms;
      'home.home-services': HomeHomeServices;
      'home.home-testimonials': HomeHomeTestimonials;
      'home.intro': HomeIntro;
      'home.programs': HomePrograms;
      'home.services': HomeServices;
      'home.testimonials': HomeTestimonials;
      'shared.seo': SharedSeo;
    }
  }
}
