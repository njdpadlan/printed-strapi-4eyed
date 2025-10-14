import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutBtn: Schema.Attribute.String;
    aboutHeader: Schema.Attribute.String;
    aboutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    aboutText: Schema.Attribute.Text;
  };
}

export interface FeaturedproductsFeaturedProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredproducts_featured_products';
  info: {
    displayName: 'FeaturedProducts';
  };
  attributes: {
    featuredProductsHeader: Schema.Attribute.String;
    integratedFormBtn: Schema.Attribute.String;
    integratedFormImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedFormText: Schema.Attribute.String;
    linerlessLabelBtn: Schema.Attribute.String;
    linerlessLabelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlessLabelTitle: Schema.Attribute.String;
    pressureSealBtn: Schema.Attribute.String;
    pressureSealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressureSealTitle: Schema.Attribute.String;
  };
}

export interface FeaturedservicesFeaturedServices
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredservices_featured_services';
  info: {
    displayName: 'FeaturedServices';
  };
  attributes: {
    clientBrandedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    clientBrandedTitle: Schema.Attribute.String;
    featuredServicesHeader: Schema.Attribute.String;
    instantProofingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    instantProofingTitle: Schema.Attribute.String;
    warehouseImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    warehouseTitle: Schema.Attribute.String;
  };
}

export interface HighqualityHighQuality extends Struct.ComponentSchema {
  collectionName: 'components_highquality_high_qualities';
  info: {
    displayName: 'highQuality';
  };
  attributes: {
    highQualityHeader: Schema.Attribute.String;
    highQualityImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    highQualityText: Schema.Attribute.Text;
  };
}

export interface HomeheroHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_homehero_home_heroes';
  info: {
    displayName: 'homeHero';
  };
  attributes: {
    heroBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroBtn: Schema.Attribute.String;
    heroHeader: Schema.Attribute.String;
    heroText: Schema.Attribute.Text;
  };
}

export interface OnlinebasedOnlineBased extends Struct.ComponentSchema {
  collectionName: 'components_onlinebased_online_baseds';
  info: {
    displayName: 'OnlineBased';
  };
  attributes: {
    onlineBasedBtn: Schema.Attribute.String;
    onlineBasedHeader: Schema.Attribute.String;
    onlineBasedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    onlineBasedText: Schema.Attribute.Text;
  };
}

export interface ProductgalleryProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_productgallery_product_galleries';
  info: {
    displayName: 'ProductGallery';
  };
  attributes: {
    productGalleryImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PromoproductsPromoProducts extends Struct.ComponentSchema {
  collectionName: 'components_promoproducts_promo_products';
  info: {
    displayName: 'PromoProducts';
  };
  attributes: {
    promoProductsBtn: Schema.Attribute.String;
    promoProductsHeader: Schema.Attribute.String;
    promoProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface UniqueproductsUniqueProducts extends Struct.ComponentSchema {
  collectionName: 'components_uniqueproducts_unique_products';
  info: {
    displayName: 'UniqueProducts';
  };
  attributes: {
    uniqueProductsBtn: Schema.Attribute.String;
    uniqueProductsHeader: Schema.Attribute.String;
    uniqueProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    uniqueProductsText: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'featuredproducts.featured-products': FeaturedproductsFeaturedProducts;
      'featuredservices.featured-services': FeaturedservicesFeaturedServices;
      'highquality.high-quality': HighqualityHighQuality;
      'homehero.home-hero': HomeheroHomeHero;
      'onlinebased.online-based': OnlinebasedOnlineBased;
      'productgallery.product-gallery': ProductgalleryProductGallery;
      'promoproducts.promo-products': PromoproductsPromoProducts;
      'uniqueproducts.unique-products': UniqueproductsUniqueProducts;
    }
  }
}
