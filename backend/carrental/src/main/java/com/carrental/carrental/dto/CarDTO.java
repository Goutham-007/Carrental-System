package com.carrental.carrental.dto;

public class CarDTO {
    private Long id;
    private String brand;
    private String model;
    private String number;
    private double pricePerDay;
    private boolean available;
    private String imageurl;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }
    public double getPricePerDay() {
        return pricePerDay;
    }
    public void setPricePerDay(double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }
    public boolean isAvailable() {
        return available;
    }
    public void setAvailable(boolean available) {
        this.available = available;
    }
    public String getImageurl() {
        return imageurl;
    }
    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

}
